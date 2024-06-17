import dayjs from "dayjs";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  TimerActionType,
  emitTimerAction,
  socket,
  socketCommands,
} from "../socketio";

@customElement("timer-card")
export class TimerCard extends LitElement {
  static styles = [
    css`
      .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        border-color: hsl(var(--border-color));
        border-width: 1px;
        border-style: solid;
        box-shadow: var(--card-shadow);
        padding: 32px 16px;
        gap: 1rem;
      }

      .timer-formatted {
        font-weight: 700;
        font-size: 2.25em;
      }
    `,
  ];

  interval: NodeJS.Timeout | null = null;
  startTime: string = "";

  @state()
  formattedTimer = "--:--:--";

  @property()
  timerId = "room/user1/main_timer";

  @property()
  shortTimerId = "main_timer";

  formatTimer(isoTime: string, relativeTo: string = "") {
    const time = (relativeTo ? dayjs(relativeTo) : dayjs()).diff(
      isoTime,
      "second"
    );
    const dayJsTime = dayjs.unix(time).utc();
    return dayJsTime.format("HH:mm:ss");
  }

  handleTimerSet = (isoTime: string) => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.startTime = isoTime;

    this.interval = setInterval(() => {
      this.formattedTimer = this.formatTimer(isoTime);
    }, 500);
  };

  handleTimerStopped = (isoTime: string) => {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.formattedTimer = this.formatTimer(this.startTime, isoTime);
  };

  handleStart = () => {
    emitTimerAction({
      type: TimerActionType.TIMER_START,
      id: this.shortTimerId,
    });
  };

  handleStop = () => {
    emitTimerAction({
      type: TimerActionType.TIMER_STOP,
      id: this.shortTimerId,
    });
  };

  connectedCallback() {
    super.connectedCallback();
    socket.on(socketCommands.getTimerSet(this.timerId), this.handleTimerSet);
    socket.on(
      socketCommands.getTimerStopped(this.timerId),
      this.handleTimerStopped
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    socket.off(socketCommands.getTimerSet(this.timerId), this.handleTimerSet);
    socket.off(
      socketCommands.getTimerStopped(this.timerId),
      this.handleTimerStopped
    );
  }

  render() {
    return html`
      <div class="card">
        <div class="timer-formatted">${this.formattedTimer}</div>
        <div>
          <c-button
            id="startButton"
            @click=${this.handleStart}
            label="Start"
          ></c-button>
          <c-button
            id="stopButton"
            @click=${this.handleStop}
            label="Stop"
          ></c-button>
        </div>
      </div>
    `;
  }
}
