import {Button, TextField} from "@mui/material";
import {type FieldValues, useForm} from "react-hook-form";

const CreatePage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
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
                       {...register("link", {pattern: /https?:\/\//})}
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