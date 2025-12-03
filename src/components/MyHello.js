export default function MyHello(props) {
    return (
        <div>
            こんにちは！{props.person.name}さん（{props.person.age}）
            <div>
                <input type="button"
                    onClick={() => { props.func(props.person.name) }}
                    value="click me!" />
            </div>
        </div>
    );
}
