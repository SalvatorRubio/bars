import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import FormInput from "./FormInput/FormInput";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import { FormProvider, useForm } from "react-hook-form";

const CreateAuditorium = () => {
  const methods = useForm({
    defaultValues: {
      number: "",
      name: "",
      type: "",
    },
  });

  const createAuditorium = (data) => {
    const { number, name, type } = data;
    AdminApi.insertAuditorium(number, name, type);
  };

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.formState]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createAuditorium)}>
        <Box>
          <Typography
            variant="h6"
            sx={{ width: "100%", mb: 2, textAlign: "center" }}
          >
            Создание аудитории
          </Typography>
          <FormInput
            name="number"
            text="номер аудитории"
            label="Номер аудитории"
          />
          <FormInput
            name="name"
            text="название аудитории"
            label="Название аудитории"
          />
          <FormInput name="type" text="тип аудитории" label="Тип аудитории" />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              mt: "20px",
            }}
          >
            <Button type="submit" variant="contained">
              Создать аудиторию
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateAuditorium;
