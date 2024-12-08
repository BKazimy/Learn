function Submission({ onCancel, onSave }) {
    return (
        <View>
            <CompButton 
                title="Cancel"
                onPress={onCancel}
            />
            <CompButton 
                title="Save"
                onPress={onSave}
            />
        </View>
    );
}

export default Submission;