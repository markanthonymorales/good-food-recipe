import secret from '../resources/secret.json';
import { getSHA256Hash } from "boring-webcrypto-sha256";

const randomKey = getSHA256Hash(new Date().toString());

const checkKeys = async (key1: string | null, key2: string): Promise<boolean> => {
    return key1 === key2;
};

const validate = async (security: string): Promise<boolean> => {
    await updateAcceptedKey('');
    const res = await checkKeys(security, secret.key);
    if(res) {
        await updateAcceptedKey(security + randomKey)
    }
    return res;
};

const updateAcceptedKey = async (accepted_key: string): Promise<boolean> => {
    localStorage.setItem("accepted-key", await getSHA256Hash(accepted_key));
    return true;
};

const checkAcceptedKey = async (): Promise<boolean> => {
    return await checkKeys(localStorage.getItem("accepted-key"), await getSHA256Hash(secret.key + randomKey));
};

export async function useLogin(password: string): Promise<boolean> {
    return await validate(await getSHA256Hash(password));
};

export async function useIsLogged(): Promise<boolean> {
    return await checkAcceptedKey();
};