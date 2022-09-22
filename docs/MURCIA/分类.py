import os

def main():
    for root, dirs, files in os.walk('asignatura/'):
        #print(files)
        for filess in files:
            with open('asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'MURCIA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE MURCIA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'MURCIA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE MURCIA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-murcia
                    title: examen ebau de murcia
                    slug: /MURCIA/
                    description: TODAS EXAMENES DE EBAU DE murcia
                    keywords:
                    - murcia
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()