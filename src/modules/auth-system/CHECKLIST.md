# CHECKLIST: AUTH TEMPLATE INSTALL

When reusing in a new app:

1. **Copy folders:**
   - `/src/auth`
   - `/src/ui/toast`
   - `/src/config`
   - `/src/modules/auth-system`

2. **Wrap root:**
   ```tsx
   <ToastProvider>
     <AuthProvider>
       <App />
     </AuthProvider>
   </ToastProvider>
   ```

3. **Use anywhere:**
   ```tsx
   import { useAuth, useToast, authConfig } from "@/modules/auth-system";

   const { login, signup, logout, user } = useAuth();
   const { showToast } = useToast();
   ```

4. **Customize:**
   ```tsx
   authConfig.messages.loginSuccess = "Welcome to MyApp 🚀";
   ```
