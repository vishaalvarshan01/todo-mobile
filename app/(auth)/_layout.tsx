import {Stack} from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="account" />
            <Stack.Screen name="auth" />
        </Stack>
    )
}

export default AuthLayout;