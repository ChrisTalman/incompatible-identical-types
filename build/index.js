'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { r as RethinkDB } from 'rethinkdb-ts';
import { run } from '@ChrisTalman/incompatible-identical-types-dependency';
;
initialise();
function initialise() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = RethinkDB
            .table('Users')
            .insert({ id: '123', username: 'Test' });
        const result = yield run(query);
        console.log(result);
    });
}
;
//# sourceMappingURL=index.js.map