import {Button, TextField} from "@mui/material";
import {type FieldValues, useForm} from "react-hook-form";
import useTodoStore from "../store/TodoStore.ts";

const CreatePage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {addTodoItem, todoItems} = useTodoStore();

    const onSubmit = (data: FieldValues) => {
        const newId = todoItems.length === 0 ? 1 : Math.max(...todoItems.map(x => x.id)) + 1;
        addTodoItem({
            id: newId,
            title: data.title,
            description: data.description,
            link: data.link,
            isDone: false,
            dateDueTo: data.dateDueTo,
            createdAt: new Date(),
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 30
        }}>
            <TextField label={"title"}
                       placeholder={"Enter title..."}
                       variant={"outlined"}
                       fullWidth
                       {...register("title", {required: "a title is required."})}
                       error={!!errors.title}
                       helperText={errors.title && <span>{"" + errors.title?.message}</span>}/>
            <TextField label={"description"}
                       placeholder={"description (optional)"}
                       multiline
                       rows={5}
                       fullWidth
                       {...register("description", {maxLength: {value: 400, message: "description is too long."}})}
                       error={!!errors.description}
                       helperText={errors.description && <span>{"" + errors.description?.message}</span>}/>
            <TextField label={"link"}
                       placeholder={"Link a website to this event (optional)"}
                       fullWidth
                       {...register("link", {pattern: {value: /https?:\/\//, message: "Links must start with http / https"}})}
                       error={!!errors.link}
                       helperText={errors.link && <span>{"" + errors.link?.message}</span>}/>
            <TextField label={"due to"}
                       type={"datetime-local"}
                       slotProps={{inputLabel: {shrink: true}}}
                       fullWidth
                       {...register("dateDueTo")}
                       error={!!errors.dateDueTo}
                       helperText={errors.dateDueTo && <span>{"" + errors.dateDueTo?.message}</span>}/>
            <Button variant={"outlined"} type={"submit"} fullWidth>Submit</Button>
        </form>
    );
};

export default CreatePage;