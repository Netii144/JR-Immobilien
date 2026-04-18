import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SubmitContactRequest {
    service: string;
    name: string;
    email: string;
    message: string;
    phone?: string;
}
export type SubmitContactResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface ContactSubmission {
    id: bigint;
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone?: string;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    submitContact(req: SubmitContactRequest): Promise<SubmitContactResult>;
}
