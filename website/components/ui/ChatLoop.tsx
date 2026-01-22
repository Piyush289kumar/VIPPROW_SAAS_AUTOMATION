"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChatBubble } from "./ChatBubble";
import { useTypewriterLoop } from "@/hooks/useTypewriter";

const senderMessage =
  "Hey, I need help scheduling a team meeting that works well for everyone. Any suggestions for finding an optimal time slot?";

const receiverMessage =
  "Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate.";

export function ChatDemoLoop({ className }: { className?: string }) {
  const typedSender = useTypewriterLoop(senderMessage, 28, 2000);
  const typedReceiver = useTypewriterLoop(receiverMessage, 22, 3000);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <div className="flex w-full max-w-lg flex-col gap-5 rounded-2xl bg-black/80 p-4">
        {/* RIGHT (User) */}
        <ChatBubble side="right" text={typedSender} />

        {/* LEFT (AI) */}
        <ChatBubble side="left" text={typedReceiver} />

        {/* Typing dots */}
        <motion.div
          className="mt-1 flex items-center gap-1 self-start"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <span className="h-2 w-2 rounded-full bg-neutral-500" />
          <span className="h-2 w-2 rounded-full bg-neutral-500" />
          <span className="h-2 w-2 rounded-full bg-neutral-500" />
        </motion.div>
      </div>
    </div>
  );
}
