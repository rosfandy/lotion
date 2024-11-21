"use client"
import { motion } from "framer-motion";
import React from "react";

interface AnimatedTypingComponentProps {
    children: React.ReactNode;  // Allow JSX elements or strings as children
    className?: string;
    transition?: object;
    delay?: number;  // Delay before the typing effect starts
}

const AnimatedTypingDiv = ({
    children,
    className = "",
    transition = { duration: 0.5, ease: "easeOut" },
    delay = 0,
}: AnimatedTypingComponentProps) => {
    // Extract the text content if the child is a string or JSX
    const text = React.Children.toArray(children)
        .map((child) => (typeof child === "string" ? child : "")).join(" "); // Convert to string

    const textArray = text.split(" ");  // Split the text into words

    return (
        <div className={className}>
            {textArray.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -50 }}  // Start with opacity 0 and shift to the left
                    animate={{ opacity: 1, x: 0 }}    // Animate to opacity 1 and x: 0
                    transition={{
                        ...transition,
                        delay: index * 0.5 + delay, // Delay based on word index
                    }}
                    style={{ display: "inline-block" }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedTypingDiv;
