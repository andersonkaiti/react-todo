"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { TodoContext } from "@/contexts/todo-context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoContextType } from "@/contexts/todo-context-type.d";

const schema = yup.object().shape({
    title: yup.string().required("Tarefa inválida")
});

interface AddTodoForm {
    title: string;
}

export default function AddTodo() {
    const route = useRouter();
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data: AddTodoForm, event: any) => {
        addTodo(data.title);
        event.target.reset();
        route.push("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="uk-container">
            <h4>Nova tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input
                    type="text"
                    id="title"
                    placeholder="Nova tarefa..."
                    className="uk-input"
                    /* o spread operator expande as propriedades do método register no input
                    
                        const register: <"title">(name: "title", options?: RegisterOptions<{
                            title: string;
                        }, "title"> | undefined) => UseFormRegisterReturn<"title">\
                    */
                    {...register("title")}
                />
                <span>
                    <small>
                        <strong className="uk-text-danger">
                            {errors.title?.message}
                        </strong>
                    </small>
                </span>
            </div>
            <div className="uk-width-1-1">
                <button
                    type="submit"
                    className="uk-button uk-button-primary"
                >
                    Salvar
                </button>
            </div>
        </form>
    );
}