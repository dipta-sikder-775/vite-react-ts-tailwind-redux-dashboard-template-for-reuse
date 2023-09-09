import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentModal,
  setCurrentModal,
} from "@redux/features/ui/uiSlice";
import { ICurrentModal } from "@redux/features/ui/uiSlice.types";
import { TCurrentModal } from "@modals/registered-modals";

type TModalNames = Required<TCurrentModal>;

export default function useModal(): {
  isOpen: (modalName?: TModalNames) => boolean;
  openModal: (name: TModalNames, props?: any) => void;
  onClose: () => void;
  currentModal: ICurrentModal | null;
} {
  const currentModal = useSelector(selectCurrentModal);
  const dispatch = useDispatch();

  const isOpen = (modalName?: TCurrentModal) =>
    currentModal?.name === modalName || false;

  const openModal = (name: TCurrentModal, props?: any) => {
    const modalData: ICurrentModal = { name, props };
    dispatch(setCurrentModal(modalData));
  };

  const onClose = () => {
    dispatch(setCurrentModal(null));
  };

  return {
    isOpen,
    openModal,
    onClose,
    currentModal,
  };
}
