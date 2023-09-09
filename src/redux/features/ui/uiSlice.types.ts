import { TCurrentModal } from "@modals/registered-modals";

export interface ICurrentModal {
    name: TCurrentModal;
    props?: any;
}

export interface IUiState {
    currentModal: ICurrentModal | null;
}
