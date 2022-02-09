interface Objeto{
    'one'?: number
    'two' ?: number
}

export function sum(a:number, b:number):number{
    return a + b
}

export function objects(obj:Objeto):object{
    obj['two'] = 2
    return obj
}
