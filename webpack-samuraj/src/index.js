import { message, messageDom } from './tools/message';
import info from './data/title.txt';
import './sass/index.scss';
import addImage from './tools/image';

message('Działa po bundlingu!');
messageDom(info);
addImage('section');
