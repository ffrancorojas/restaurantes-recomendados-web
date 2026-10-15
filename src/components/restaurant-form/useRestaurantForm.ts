import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { RestaurantFormData } from '@contracts';
import { useAuthenticatedSession } from '@app/router/router.context';
import { restaurantService } from '@services';
import type { UseRestaurantFormParams } from './restaurantForm.types';

export function useRestaurantForm({ initial, onSave }: UseRestaurantFormParams) {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const isEditing = Boolean(initial.id);
  const [showLeaveConfirmation, setShowLeaveConfirmation] = useState(false);
  const [recommenderOptions, setRecommenderOptions] = useState<string[]>([]);

  useEffect(() => {
    let isCurrent = true;

    restaurantService
      .listRecommenders({ token: session.accessToken })
      .then((options) => {
        if (isCurrent) setRecommenderOptions(options);
      })
      .catch(() => {
        if (isCurrent) setRecommenderOptions([]);
      });

    return () => {
      isCurrent = false;
    };
  }, [session.accessToken]);

  const initialValues = useMemo(() => {
    const { id: _id, createdAt: _createdAt, source: _source, ...values } = initial;
    return values;
  }, [initial]);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting },
  } = useForm<RestaurantFormData>({ defaultValues: initialValues });

  const data = watch();
  const submit = handleSubmit((formData) =>
    onSave({
      data: { ...formData, rating: formData.visited ? formData.rating : '' },
      id: initial.id,
    }),
  );

  const requestCancel = () => {
    if (isSubmitting) return;
    if (isDirty) {
      setShowLeaveConfirmation(true);
      return;
    }
    if (isEditing || initial.source === 'shared') navigate('/restaurants');
    else navigate(-1);
  };

  const cancelLeave = () => setShowLeaveConfirmation(false);
  const confirmLeave = () => {
    if (isEditing || initial.source === 'shared') navigate('/restaurants');
    else navigate(-1);
  };

  return {
    control,
    data,
    recommenderOptions,
    isDirty,
    saving: isSubmitting,
    showLeaveConfirmation,
    requestCancel,
    cancelLeave,
    confirmLeave,
    submit,
  };
}
