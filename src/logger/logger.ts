import {LogLevel} from "./log.level";

export class Logger {

    private static instance: Logger = null;

    private static logLevel: LogLevel = LogLevel.INFO;

    private static prefix: string;

    /**
     * Returns instance of a logger.
     * @returns Logger object
     */
    public static getInstance(): Logger {
        if (Logger.instance === null) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    /**
     * Sets logging level for all logger instances
     * @param logLevel level of logging
     */
    public static setLogLevel(logLevel: LogLevel): void {
        Logger.logLevel = logLevel;
    }

    /**
     * Sets prefix of every logged message.
     * @param prefix custom string
     */
    public static setPrefix(prefix: string): void {
        Logger.prefix = `[${prefix}] `;
    }

    /**
     * Logs message of level DEBUG
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public debug(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.DEBUG)) {
            if (Logger.prefix) {
                console.debug(Logger.prefix, message, ...optionalParams);
            } else {
                console.debug(message, ...optionalParams);
            }
        }
    }

    /**
     * Logs message of level FINEST
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public finest(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.FINEST)) {
            if (Logger.prefix) {
                console.log(Logger.prefix, message, ...optionalParams);
            } else {
                console.log(message, ...optionalParams);
            }
        }
    }

    /**
     * Logs message of level FINE
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public fine(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.FINE)) {
            if (Logger.prefix) {
                console.log(Logger.prefix, message, ...optionalParams);
            } else {
                console.log(message, ...optionalParams);
            }
        }
    }

    /**
     * Logs message of level INFO
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public info(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.INFO)) {
            if (Logger.prefix) {
                console.log(Logger.prefix, message, ...optionalParams);
            } else {
                console.log(message, ...optionalParams);
            }
        }
    }

    /**
     * Logs message of level WARN
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public warn(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.WARN)) {
            if (Logger.prefix) {
                console.warn(Logger.prefix, message, ...optionalParams);
            } else {
                console.warn(message, ...optionalParams);
            }
        }
    }

    /**
     * Logs message of level ERROR
     * @param message message to be logged
     * @param optionalParams comma-separated additional parameters
     */
    public error(message?: any, ...optionalParams: any[]): void {
        if (Logger.isAllowedLevel(LogLevel.ERROR)) {
            if (Logger.prefix) {
                console.error(Logger.prefix, message, ...optionalParams);
            } else {
                console.error(message, ...optionalParams);
            }
        }
    }

    private static isAllowedLevel(level: LogLevel): boolean {
        const currentLevel = Logger.logLevel;
        return currentLevel <= level;
    }

}
