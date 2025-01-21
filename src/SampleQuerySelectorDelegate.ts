// logic.ts

export function logValues(container: HTMLElement): void {
  // Accessing custom data attributes and other attributes of the TextField
  const textField = container.querySelector<HTMLInputElement>('[data-field="txtCusId"]');
  if (textField) {

    console.log('Enabled:', textField);

    console.log('Enabled:', textField.getAttributeNames());

    

    console.log('TextField Value:', textField.value);
    console.log('Show Title:', textField.getAttribute('id'));
    console.log('Title:', textField.getAttribute('title'));
    console.log('Caption Type:', textField.getAttribute('captionType'));
    console.log('String Length:', textField.getAttribute('stringLength'));
    console.log('Mandatory:', textField.getAttribute('mandatory'));
    console.log('fontIconAlignment:', textField.getAttribute("fonticonalignment"));
    // Add other attribute accesses as needed
  }
}

// Function to set a value in the TextField
export function setTextFieldValue(container: HTMLElement, fieldName: string, value: string): void {
  const textField = container.querySelector<HTMLInputElement>(`[data-field="${fieldName}"]`);
  if (textField) {
    textField.value = value;
    console.log(`TextField with data-field="${fieldName}" updated with value: ${value}`);
  } else {
    console.error(`TextField with data-field="${fieldName}" not found`);
  }
}

// Event Delegation Function
export function initializeEventDelegation(container: HTMLElement): () => void {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const action = target.getAttribute('data-action');
    if (!action) return;

    switch (action) {
      case 'logValues':
        logValues(container);
        break;
      case 'setFieldValue':
        setTextFieldValue(container, 'txtCusId', 'New Value');
        break;
      default:
        console.warn('Unknown action:', action);
    }
  };

  // Attach event listener to the container
  container.addEventListener('click', handleClick);

  // Cleanup function
  return () => {
    container.removeEventListener('click', handleClick);
  };
}