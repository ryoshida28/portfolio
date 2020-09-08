
from json import load, dump


def prompt_problem(id):
    p = {'id': id}
    p['name'] = input('Name: ').rstrip()
    p['problem_link'] = input('Link: ').rstrip()
    p['tags'] = input('Tags: ').rstrip().split()
    p['language'] = input('Language: ').rstrip()
    p['solution_fn'] = input('Solution File: ').rstrip()
    p['summary_fn'] = input('Summary File: ').rstrip()

    return p

def prompt_tag():
    type = input("Tag Type: ")
    tag = input("Tag: ")
    return type,tag

data = dict()
with open('metadata.json', 'r') as f:
    data = load(f)

problems = data['problems']
max_id = 0
for p in problems:
    max_id = max(max_id, p['id'])

while (True):
    print('Select Operation:')
    print('[0] Quit')
    print('[1] Add Problem')
    print('[2] Add Tag')

    sel0 = int(input().rstrip())
    if sel0 == 0:
        with open('metadata.json', 'w') as f:
            dump(data, f)
        break
    elif sel0 == 1:
        data['problems'].append(prompt_problem(max_id+1))
        max_id += 1
    elif sel0 == 2:
        type,tag = prompt_tag()
        if type in data['tags']:
            data['tags'][type].append(tag)
        else:
            data['tags'][type] = [tag]
        
        data['tags'][type].sort()
