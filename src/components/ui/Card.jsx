import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, className = "" }) {
  return (
    <div className={`font-semibold text-lg mb-2 ${className}`}>
      {title}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`mt-4 border-t pt-2 ${className}`}>
      {children}
    </div>
  );
}
