import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

function ProtectRoutes({ children }) {
  // 1.Load the Authanticated user
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // 2.if there is no authanticated user redirect to /login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. while Loading show a fullpage spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if there Is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectRoutes;
