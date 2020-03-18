/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var crrncy = {'EUR': {'PLN': 4.15, 'USD': 0.83}, 'USD': {'PLN': 3.45, 'EUR': 1.2}}
        var btn = document.querySelector('.calculate-btn');
        var baseCurrencyInput = document.getElementById('currency-1');
        var secondCurrencyInput = document.getElementById('currency-2');
        var amountInput = document.getElementById('amount');
        var toShowAmount = document.querySelector('.given-amount');
        var toShowBase = document.querySelector('.base-currency');
        var toShowSecond = document.querySelector('.second-currency');
        var toShowResult = document.querySelector('.final-result');

        function convertCurrency(event) {
            event.preventDefault();
            var amount = amountInput.value;
            var from = baseCurrencyInput.value;
            var to = secondCurrencyInput.value;
            var result = 0;

            try{
                if (from == to){
                    result = amount;
                } else {
                    result = amount * crrncy[from][to];
                }
            }
            catch(err) {
                result = amount * (1 / crrncy[to][from]);
            }

            toShowAmount.innerHTML = amount;
            toShowBase.textContent = from + ' = ';
            toShowSecond.textContent = to;
            toShowResult.textContent = result;
        }

        btn.addEventListener('click', convertCurrency);

    }
};
