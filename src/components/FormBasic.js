import { useForm } from "react-hook-form"
export default function FormBasic() {
    const defaultValues = {
        name: 'ななし',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
    })

    const onSubmit = data => console.log(data);
    const onError = error => console.error(error);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="p-2 m-2">
                <label htmlFor="name">名前：</label>
                <input id="name" type="text"
                    {...register(`name`, {
                        required: '名前は必須入力です',
                        maxLength: {
                            value: 20,
                            message: '名前は20文字以内にしてください'
                        }
                    })} />
                <div>{errors.name?.message}</div>
            </div>

            <div className="p-2 m-2">
                <label htmlFor="gender">性別：</label>
                <label>
                    <input type="radio" value="male"
                        {
                        ...register('gender', {
                            required: '性別は必須入力です'
                        })
                        } />男性
                </label>
                <label>
                    <input type="radio" value="famale"
                        {
                        ...register('gender', {
                            required: '性別は必須入力です'
                        })
                        } />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>

            <div className="p-2 m-2">
                <label htmlFor="email">メールアドレス：</label><br />
                <input id="email" name="email" type="text"
                    {...register(`email`, {
                        required: 'メールアドレスは必須入力です',
                        pattern: {
                            value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                            message: 'メールアドレスの形式が不正です'
                        }
                    })} />
                <div>{errors.email?.message}</div>
            </div>

            <div className="p-2 m-2">
                <label htmlFor="memo">備考：</label>
                <textarea id="memo" className="bg-gray-200" {
                    ...register('memo', {
                        required: '備考は必須入力です',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください'
                        }
                    })
                } />
                <div>{errors.memo?.message}</div>
            </div>

            <div>
                <button type="submit">送信</button>
            </div>

        </form >
    )
}
