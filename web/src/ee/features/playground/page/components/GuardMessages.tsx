import { Button } from "@/src/components/ui/button";
import { usePlaygroundContext } from "@/src/ee/features/playground/page/context";

import { GenerationOutput } from "./GenerationOutput";
import { GuardChatMessages } from "@/src/components/AIMChatMessages";
import { type MessagesContext } from "@/src/components/AIMChatMessages/types";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/src/components/ui/resizable";

export const GuardMessages: React.FC<MessagesContext> = (props) => {
  return (
    <div className="flex h-full flex-col space-y-4 pr-4">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel minSize={10}>
          <GuardChatMessages {...props} />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-transparent" />
        <ResizablePanel
          minSize={10}
          defaultSize={20}
          className="flex flex-col space-y-4"
        >
          <GenerationOutput />
        </ResizablePanel>
      </ResizablePanelGroup>
      <SubmitButton />
    </div>
  );
};

const SubmitButton = () => {
  const { handleSubmit, isStreaming } = usePlaygroundContext();

  return (
    <Button
      className="flex-0"
      onClick={() => {
        handleSubmit().catch((err) => console.error(err));
      }}
      loading={isStreaming}
    >
      <p>Submit ({"\u2318"} + Enter)</p>
    </Button>
  );
};
