/*******************************************************************************
 *     ___                  _   ____  ____
 *    / _ \ _   _  ___  ___| |_|  _ \| __ )
 *   | | | | | | |/ _ \/ __| __| | | |  _ \
 *   | |_| | |_| |  __/\__ \ |_| |_| | |_) |
 *    \__\_\\__,_|\___||___/\__|____/|____/
 *
 *  Copyright (c) 2014-2019 Appsicle
 *  Copyright (c) 2019-2022 QuestDB
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 ******************************************************************************/

import styled from "styled-components"

import { Color } from "../../types"
import { color } from "../../utils"

export const Toast = styled.div<{ borderColor: Color }>`
  position: relative;
  display: flex;
  width: 340px;
  padding: 1rem;
  flex-direction: column;
  background: ${color("backgroundDarker")};
  border: 2px solid ${color("selection")};

  &:before {
    position: absolute;
    display: block;
    content: " ";
    width: 3px;
    top: 0;
    right: 0;
    bottom: -1px;
    background: ${({ borderColor }) => color(borderColor)};
  }
`
