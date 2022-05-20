import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import { useForm, FormProvider } from "react-hook-form";

const CreateSpeciality = () => {
  const methods = useForm({
    defaultValues: {
      nameGroup: "",
      fullNameGroup: "",
      codeGroup: "",
      courses: "",
    },
  });

  const createSpeciality = (data) => {
    const { nameGroup, fullNameGroup, codeGroup, courses } = data;
    AdminApi.insertSpeciality(nameGroup, fullNameGroup, codeGroup, courses);
  };

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.formState]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createSpeciality)}>
        <Box>
          <Typography
            variant="h6"
            sx={{ width: "100%", mb: 2, textAlign: "center" }}
          >
            Создание специальности
          </Typography>
          <FormInput
            name="nameGroup"
            label="Название"
            text="короткое название группы"
          />
          <FormInput
            name="fullNameGroup"
            label="Название"
            text="полное название группы"
          />
          <FormInput name="codeGroup" label="Код" text="код группы" />
          <FormInput
            name="courses"
            label="Курсы"
            type="number"
            text="количество курсов"
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              mt: "20px",
            }}
          >
            <Button type="submit" variant="contained">
              Создать специальность
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateSpeciality;
