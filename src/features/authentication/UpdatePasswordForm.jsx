import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpdateUser from "./useUpdateUser";
import useUser from "./useUser";
import { TEST_USER } from "../../utils/constants";
import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 2rem 1rem;
`;
const UserMsg = styled.p`
  display: flex;
  gap: 0.5rem;
`;

const UpadtePasswordAuth = ({ children }) => {
  return (
    <UserBlock>
      <FiAlertTriangle fill="yellow" color="black" fontSize={20} />
      <UserMsg>{children}</UserMsg>
    </UserBlock>
  );
};

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();
  const {
    user: { email },
  } = useUser();

  if (email === TEST_USER)
    return (
      <UpadtePasswordAuth>
        This account not allowed to update password
      </UpadtePasswordAuth>
    );

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
