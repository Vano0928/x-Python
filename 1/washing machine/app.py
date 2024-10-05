from flask import Flask, jsonify, render_template
import time

app = Flask(__name__)


machine_state = {"status": None, "stage": None}


stage_durations = {
    "water_filling": 5,
    "washing": 10,
    "spinning": 5,
    "done": 2,
}

machine_stages = [stage for stage in stage_durations.keys()]


async def simulate_machine_cycles():
    global machine_state

    for stage in machine_stages:
        machine_state["status"] = "running"
        machine_state["stage"] = stage
        time.sleep(stage_durations[stage])

    machine_state["status"] = "done"
    machine_state["stage"] = None


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/start", methods=["POST"])
async def start_machine():
    if machine_state["status"] == "running":
        return jsonify({"response": "machine is running already"}), 400

    await simulate_machine_cycles()
    return jsonify({"response": "machine started"}), 200


@app.route("/status", methods=["GET"])
def get_status():
    return jsonify(machine_state)


if __name__ == "__main__":
    app.run(debug=True)
