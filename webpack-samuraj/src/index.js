import { message, messageDom } from './tools/message';
import './components/footer';
import info from './data/title.txt';
import './css/style.css';

message('Działa po bundlingu!');
messageDom(info);
