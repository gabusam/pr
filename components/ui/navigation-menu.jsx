@@ .. @@
 const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
   <NavigationMenuPrimitive.Content
     ref={ref}
-    className={cn(
-      "absolute left-0 top-[calc(100%+0.5rem)] w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
+    className={cn("navigation-menu-content absolute top-[calc(100%+0.5rem)] w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
       className
     )}
     {...props} />