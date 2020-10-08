import { FormInputBlockPayload, FormInputBlockType } from "./form-input.model";
import { RichtextBlockPayload, RichtextBlockType } from "./richtext-block.model";

export interface FormBlock {
    type: string;
    payload: RichtextBlockPayload | FormInputBlockPayload;
}

export interface FormSection {
    headline: string,
    blocks: FormBlock[]
}

export interface FormScheme {
    projectTitle: string,
    sections: FormSection[],
}

export const BlockTypes = {
    RichtextType: RichtextBlockType,
    FormInputType: FormInputBlockType
}

