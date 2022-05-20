import { Box, Typography, Button } from "@mui/material";
import SelectGroup from "../SelectGroup/SelectGroup";
import React, { useEffect } from "react";
import SelectTeacher from "./SelectTeacher/SelectTeacher";
import FormInput from "./FormInput/FormInput";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import { useForm, FormProvider } from "react-hook-form";

const EditGroup = () => {
  const methods = useForm({
    defaultValues: {
      teacher: "",
      group: "",
      number: "",
    },
  });

  const updateGroup = (data) => {
    const { teacher, group, number } = data;
    AdminApi.updateGroup(teacher, group, number);
  };

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.formState]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(updateGroup)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{ width: "100%", mb: 2, textAlign: "center" }}
          >
            Изменение группы
          </Typography>
          <SelectGroup />
          <SelectTeacher />
          <FormInput />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              mt: "20px",
            }}
          >
            <Button type="submit" variant="contained">
              Изменить группу
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default EditGroup;
