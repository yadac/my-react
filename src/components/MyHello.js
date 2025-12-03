export default function MyHello({ person, func }) {
    return (
        <div>
            こんにちは！{person.name}さん（{person.age}）
            <div>
                <input type="button"
                    onClick={() => { func(person.name) }}
                    value="click me!" />
            </div>
        </div>
    );
}
