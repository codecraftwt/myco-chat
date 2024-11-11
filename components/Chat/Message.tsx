import { Message as AIMessage } from "ai";
import { TvMinimalPlay } from "lucide-react";
import { useToolCallProvider } from "@/providers/ToolCallProvider";
import { useProfileProvider } from "@/providers/ProfileProvider";
import getZoraPfpLink from "@/lib/zora/getZoraPfpLink";
import ToolContent from "../Tools/ToolContent";
import ToolDescription from "../Tools/ToolDescription";

const Message = ({ message }: { message: AIMessage }) => {
  const { profile } = useProfileProvider();
  const { context } = useToolCallProvider();

  return (
    <div
      className={message.role === "assistant" ? "flex" : ""}
    >
      {
        message.role === "assistant" && (
          <div className="w-8 h-8">
            {
              profile ? (
                <img
                  src={getZoraPfpLink(profile)}
                  alt="PFP"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              ) : (
                <TvMinimalPlay size={32} color="#000000" />
              )
            }
          </div>
        )
      }
      {context && <ToolContent />}
      <ToolDescription message={message} />
    </div>
  );
};

export default Message;
