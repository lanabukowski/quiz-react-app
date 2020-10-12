export default class Service {
    url = 'http://localhost:3000/questions';

    getQuestions = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }
}
    