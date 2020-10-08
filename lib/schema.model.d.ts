import { FormInputBlockPayload } from "./form-input.model";
import { RichtextBlockPayload } from "./richtext-block.model";
export interface FormBlock {
    type: string;
    payload: RichtextBlockPayload | FormInputBlockPayload;
}
export interface FormSection {
    headline: string;
    blocks: FormBlock[];
}
export interface FormScheme {
    projectTitle: string;
    sections: FormSection[];
}
export declare const BlockTypes: {
    RichtextType: string;
    FormInputType: string;
};
