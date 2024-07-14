import os

# Get all .graph files in the current directory
graph_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.endswith('.graph')]

for graph_file in graph_files:
    # Open the .graph file
    with open(graph_file, 'r') as file:
        data = file.read()

    # Create a .txt file with the same name
    txt_file = graph_file.replace('.graph', '.txt')

    # Write the data to the .txt file
    with open(txt_file, 'w') as file:
        file.write(data)