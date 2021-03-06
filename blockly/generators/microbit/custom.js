/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Microbit for control blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Microbit.custom');

goog.require('Blockly.Microbit');


Blockly.Microbit['smd_logic'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Microbit.valueToCode(block, 'IF' + n,
      Blockly.Microbit.ORDER_NONE) || 'false';
    branchCode = Blockly.Microbit.statementToCode(block, 'DO' + n);
    code += (n > 0 ? ' else ' : '') +
        'if (' + conditionCode + ') {\n' + branchCode + '}';

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Microbit.statementToCode(block, 'ELSE');
    code += ' else {\n' + branchCode + '}';
  }
  return code + '\n';
};

Blockly.Microbit['string_length'] = function(block) {
  // String or array length.
  
  return "Test 1";
};

Blockly.Microbit['text_print'] = function(block) {
  // String or array length.
  
  return "Just checking if this code works";
};
