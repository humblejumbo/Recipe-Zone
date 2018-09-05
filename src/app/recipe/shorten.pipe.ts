import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";

@Pipe({
    name:'shorten'
})

export class ShortenPipe implements PipeTransform
{
    transform(value:any)
    {
        if(value.length>40)
        {
            return value.substr(0,40)+'...';
        }

        return value;
    }
}