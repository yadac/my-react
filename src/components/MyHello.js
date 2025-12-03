export default function MyHello(props) {
    return (
        <div>
            こんにちは！{props.person.name}さん（{props.person.age}）
        </div>
    );
}
