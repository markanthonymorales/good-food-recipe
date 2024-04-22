export default async function useAlert(message: string): Promise<void>{
    // @ts-ignore
    document.querySelector('#alert').textContent = message;
    setTimeout(()=>{
        // @ts-ignore
        document.querySelector('#alert').textContent = '';
    }, 3000)
};
