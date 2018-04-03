/**
 * Copyright (c) 2002-2018 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NumberOrInteger} from './graph-types';
import Integer from "./integer";

declare class Duration<T extends NumberOrInteger = Integer> {
  months: T;
  days: T;
  seconds: T;
  nanoseconds: T;

  constructor(months: T, days: T, seconds: T, nanoseconds: T)
}

declare class LocalTime<T extends NumberOrInteger = Integer> {
  hour: T;
  minute: T;
  second: T;
  nanosecond: T;

  constructor(hour: T, minute: T, second: T, nanosecond: T);
}

declare class Time<T extends NumberOrInteger = Integer> {

  localTime: LocalTime<T>;
  offsetSeconds: T;

  constructor(localTime: LocalTime<T>, offsetSeconds: T);
}

declare class Date<T extends NumberOrInteger = Integer> {

  year: T;
  month: T;
  day: T;

  constructor(year: T, month: T, day: T);
}

declare class LocalDateTime<T extends NumberOrInteger = Integer> {

  localDate: Date<T>;
  localTime: LocalTime<T>;

  constructor(localDate: Date<T>, localTime: LocalTime<T>);
}

declare class DateTimeWithZoneOffset<T extends NumberOrInteger = Integer> {

  localDateTime: LocalDateTime<T>;
  offsetSeconds: T;

  constructor(localDateTime: LocalDateTime<T>, offsetSeconds: T);
}

declare class DateTimeWithZoneId<T extends NumberOrInteger = Integer> {

  localDateTime: LocalDateTime<T>;
  zoneId: string;

  constructor(localDateTime: LocalDateTime<T>, zoneId: string);
}

declare function isDuration(obj: object): boolean;

declare function isLocalTime(obj: object): boolean;

declare function isTime(obj: object): boolean;

declare function isDate(obj: object): boolean;

declare function isLocalDateTime(obj: object): boolean;

declare function isDateTimeWithZoneOffset(obj: object): boolean;

declare function isDateTimeWithZoneId(obj: object): boolean;

export {
  Duration,
  LocalTime,
  Time,
  Date,
  LocalDateTime,
  DateTimeWithZoneOffset,
  DateTimeWithZoneId,
  isDuration,
  isLocalTime,
  isTime,
  isDate,
  isLocalDateTime,
  isDateTimeWithZoneOffset,
  isDateTimeWithZoneId
}
