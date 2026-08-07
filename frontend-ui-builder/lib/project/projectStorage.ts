export function saveProject(data: unknown) {
    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        {
            type: "application/json",
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "frontend-ui-builder.json";

    link.click();

    URL.revokeObjectURL(url);
}

export async function loadProject(
    file: File
) {
    const text = await file.text();

    return JSON.parse(text);
}