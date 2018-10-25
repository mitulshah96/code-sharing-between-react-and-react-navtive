import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Landing from "../containers/landing"

storiesOf("Landing", module).add("with text", () => <Landing onClick={action("clicked")}>Hello Button</Landing>)
