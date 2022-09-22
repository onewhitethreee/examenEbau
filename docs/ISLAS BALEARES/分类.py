import os

def main():
    for root, dirs, files in os.walk('ISLAS BALEARES/asignatura/'):
        #print(files)
        for filess in files:
            with open('ISLAS BALEARES/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'ISLAS BALEARES/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE ISLAS BALEARES'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'ISLAS BALEARES' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE ISLAS BALEARES'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-ISLAS BALEARES
                    title: examen ebau de ISLAS BALEARES
                    slug: /ISLAS BALEARES/
                    description: TODAS EXAMENES DE EBAU DE ISLAS BALEARES
                    keywords:
                    - ISLAS BALEARES
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()