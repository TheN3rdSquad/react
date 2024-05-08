import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function BasicForm() {
	return (
		<Form>
			<Form.Group
				className="mb-3" 
				controlId="formBasicEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder='Password' />
			</Form.Group>
			<Form.Group
				className="mb-3"
				controlId="formBasicCheckbox"
			>
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export function DisabledForm() {
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Disabled input</Form.Label>
				<Form.Control placeholder="Disabled input" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Disabled select menu</Form.Label>
				<Form.Select disabled>
					<option>Disabled select</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Check type="checkbox" label="Can't check this" disabled />
			</Form.Group>
		</>
	);
}