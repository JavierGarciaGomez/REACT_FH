import { useAppDispatch, useAppSelector } from ".";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useAppDispatch();
  const { isDateModalOpen } = useAppSelector((state) => state.uiReducer);
  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return { isDateModalOpen, openDateModal, closeDateModal, toggleDateModal };
};
