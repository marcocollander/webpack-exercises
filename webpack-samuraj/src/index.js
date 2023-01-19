import { message, messageDom } from './tools/message';
import info from './data/title.txt';
import './sass/index.scss';

message('Działa po bundlingu!');
messageDom(info);
