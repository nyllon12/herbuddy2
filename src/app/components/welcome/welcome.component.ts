@@ .. @@
   navigateToSignup() {
-    // For demo purposes, just show an alert
-    alert('Signup feature coming soon!');
+    this.router.navigate(['/auth/signup']);
   }
 
   navigateToLogin() {
-    // For demo purposes, just show an alert
-    alert('Login feature coming soon!');
+    this.router.navigate(['/auth/login']);
   }